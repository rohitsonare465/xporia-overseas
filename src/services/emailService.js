import emailjs from '@emailjs/browser';

// Debug: Check if environment variables are loaded
console.log('🔍 EmailJS Config Check:');
console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log('User Template:', process.env.REACT_APP_EMAILJS_TEMPLATE_USER);
console.log('Client Template:', process.env.REACT_APP_EMAILJS_TEMPLATE_CLIENT);
console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);


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

    // Validate email before sending
    const userEmail = formData.email?.trim();
    if (!userEmail) {
        console.error('User confirmation failed: Email is empty or undefined');
        throw new Error('Email address is required');
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        console.error('User confirmation failed: Invalid email format:', userEmail);
        throw new Error('Invalid email format');
    }

    const templateParams = {
        // EmailJS template requires these fields for user confirmation
        email: userEmail,
        to_email: userEmail,
        user_email: userEmail,
        to_name: formData.name || 'Valued Customer',
        user_name: formData.name || 'Valued Customer',
        from_name: 'XPORIA OVERSEAS',
        company_name: 'XPORIA OVERSEAS',
        reply_to: 'info@xporiaoverseas.com',
    };

    console.log('📧 Sending user confirmation to:', userEmail);
    console.log('📧 Template params:', templateParams);

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams);
        console.log('✅ User confirmation email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('❌ Failed to send user confirmation email:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
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

/**
 * Send user confirmation email for quote request
 * @param {Object} formData - Form data containing user information
 * @returns {Promise} - EmailJS promise
 */
export const sendQuoteUserConfirmation = async (formData) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_USER;

    if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration missing. Please check your .env file.');
    }

    // Validate email before sending
    const userEmail = formData.email?.trim();
    if (!userEmail) {
        console.error('Quote user confirmation failed: Email is empty or undefined');
        throw new Error('Email address is required');
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        console.error('Quote user confirmation failed: Invalid email format:', userEmail);
        throw new Error('Invalid email format');
    }

    const templateParams = {
        // EmailJS template requires these fields for user confirmation
        email: userEmail,
        to_email: userEmail,
        user_email: userEmail,
        to_name: formData.fullName || 'Valued Customer',
        user_name: formData.fullName || 'Valued Customer',
        from_name: 'XPORIA OVERSEAS',
        company_name: 'XPORIA OVERSEAS',
        reply_to: 'info@xporiaoverseas.com',
    };

    console.log('📧 Sending quote user confirmation to:', userEmail);
    console.log('📧 Template params:', templateParams);

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams);
        console.log('✅ Quote user confirmation email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('❌ Failed to send quote user confirmation email:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        throw error;
    }
};

/**
 * Send detailed quote request notification email to the client
 * @param {Object} formData - Form data containing all quote request details
 * @returns {Promise} - EmailJS promise
 */
export const sendQuoteClientNotification = async (formData) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_CLIENT;

    if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration missing. Please check your .env file.');
    }

    // Build a detailed message from the quote request
    const quoteDetails = `
QUOTE REQUEST DETAILS
=====================

Product: ${formData.product || 'Not specified'}
Quantity: ${formData.quantity || 'Not specified'}

CONTACT INFORMATION
-------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
WhatsApp: ${formData.whatsapp || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Country: ${formData.country || 'Not provided'}

ADDITIONAL REQUIREMENTS
-----------------------
${formData.message || 'No additional requirements specified.'}
    `.trim();

    const templateParams = {
        user_name: formData.fullName,
        user_email: formData.email,
        user_phone: formData.phone || 'Not provided',
        user_company: formData.company || 'Not provided',
        user_address: formData.country || 'Not provided',
        user_message: quoteDetails,
        submission_date: new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
        }),
    };

    try {
        const response = await emailjs.send(serviceId, templateId, templateParams);
        console.log('Quote client notification email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('Failed to send quote client notification email:', error);
        throw error;
    }
};

/**
 * Send both user confirmation and client notification emails for quote request
 * @param {Object} formData - Form data containing all quote request information
 * @returns {Promise<Object>} - Object with success status and any errors
 */
export const sendQuoteEmails = async (formData) => {
    const results = {
        userEmailSent: false,
        clientEmailSent: false,
        errors: [],
    };

    try {
        // Send user confirmation email
        await sendQuoteUserConfirmation(formData);
        results.userEmailSent = true;
    } catch (error) {
        results.errors.push({ type: 'user', error: error.message });
    }

    try {
        // Send client notification email
        await sendQuoteClientNotification(formData);
        results.clientEmailSent = true;
    } catch (error) {
        results.errors.push({ type: 'client', error: error.message });
    }

    return results;
};
