/**
 * WhatsApp Utility - Mahogra Madu
 * 
 * Functions for generating WhatsApp chat URLs with prefilled messages.
 * Centralizes WhatsApp configuration in one place.
 */

/**
 * WhatsApp Configuration
 * 
 * IMPORTANT: The actual business WhatsApp number is not yet available.
 * This should be updated when the client provides their number.
 * 
 * Format: '62' + phone number without leading zero
 * Example: '6281234567890' (for +62 812-3456-7890)
 */
const WHATSAPP_CONFIG = {
  phoneNumber: '6282175160231', // TODO: Add actual WhatsApp number from client
  defaultMessage: 'Halo Mahogra Madu, saya ingin bertanya tentang produk Anda.'
};

/**
 * Check if WhatsApp number is configured
 * 
 * @returns {boolean} - True if number exists and is not empty
 */
export const hasWhatsAppNumber = () => {
  return Boolean(
    WHATSAPP_CONFIG.phoneNumber &&
    WHATSAPP_CONFIG.phoneNumber.trim() !== ''
  );
};

/**
 * Generate WhatsApp chat URL
 * 
 * @param {string} message - Custom message to prefill (optional)
 * @returns {string|null} - WhatsApp URL or null if no number configured
 * 
 * How it works:
 * 1. Checks if phone number is configured
 * 2. Uses custom message or default message
 * 3. Encodes message for URL (spaces become %20, etc.)
 * 4. Returns full WhatsApp API URL
 * 
 * WhatsApp URL format: https://wa.me/[phone]?text=[encoded_message]
 */
export const generateWhatsAppLink = (message = null) => {
  // Return null if no phone number configured
  if (!hasWhatsAppNumber()) {
    return null;
  }
  
  // Use custom message or default
  const text = message || WHATSAPP_CONFIG.defaultMessage;
  
  // Encode message for URL (handles special characters)
  const encodedText = encodeURIComponent(text);
  
  // Build WhatsApp API URL
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedText}`;
};

/**
 * Generate product-specific WhatsApp message
 * 
 * @param {string} productName - Name of the product
 * @param {string} productWeight - Weight/size of the product (optional)
 * @returns {string} - Formatted message
 * 
 * Example output: "Halo, saya tertarik dengan produk Madu Hutan Murni (500g)..."
 */
export const generateProductMessage = (productName, productWeight = null) => {
  const weightText = productWeight ? ` (${productWeight})` : '';
  return `Halo, saya tertarik dengan produk ${productName}${weightText}. Apakah masih tersedia?`;
};

/**
 * Get the configured WhatsApp number (for display purposes)
 * 
 * @returns {string} - Phone number or empty string
 */
export const getWhatsAppNumber = () => {
  return WHATSAPP_CONFIG.phoneNumber;
};
