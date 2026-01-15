import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const initEmailJS = () => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
        emailjs.init(publicKey);
    } else {
        console.error('EmailJS public key not found in environment variables');
    }
};

// Initialize on module load
initEmailJS();

/**
 * Send confirmation email to the user
 * @param {Object} formData - Form data containing user information
 * @returns {Promise} - EmailJS promise
 */
export const sendUserConfirmation = async (formData) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_USER;

    if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration missing. Please check your .env file.');
    }

    const templateParams = {
        to_email: formData.email,
        to_name: formData.name,
        company_name: 'XPORIA OVERSEAS',
    };

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams);
        console.log('User confirmation email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('Failed to send user confirmation email:', error);
        throw error;
    }
};

/**
 * Send detailed notification email to the client
 * @param {Object} formData - Form data containing all request details
 * @returns {Promise} - EmailJS promise
 */
export const sendClientNotification = async (formData) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_CLIENT;

    if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration missing. Please check your .env file.');
    }

    const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || 'Not provided',
        user_company: formData.company || 'Not provided',
        user_address: formData.address || 'Not provided',
        user_message: formData.message,
        submission_date: new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
        }),
    };

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams);
        console.log('Client notification email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('Failed to send client notification email:', error);
        throw error;
    }
};

/**
 * Send both user confirmation and client notification emails
 * @param {Object} formData - Form data containing all information
 * @returns {Promise<Object>} - Object with success status and any errors
 */
export const sendEmails = async (formData) => {
    const results = {
        userEmailSent: false,
        clientEmailSent: false,
        errors: [],
    };

    try {
        // Send user confirmation email
        await sendUserConfirmation(formData);
        results.userEmailSent = true;
    } catch (error) {
        results.errors.push({ type: 'user', error: error.message });
    }

    try {
        // Send client notification email
        await sendClientNotification(formData);
        results.clientEmailSent = true;
    } catch (error) {
        results.errors.push({ type: 'client', error: error.message });
    }

    return results;
};
