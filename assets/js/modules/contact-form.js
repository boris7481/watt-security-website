/* ==========================================================================
   Contact Form — client-side validation, error display, and the accessible
   confirmation message for the Contact section's form. See
   architecture/JAVASCRIPT_ARCHITECTURE.md §3 (contact-form.js).

   Extensible by design: VALIDATORS is a plain field-name -> validator-
   function map. Adding a new field later means adding one entry here and
   one matching [data-field="..."] wrapper in the markup — nothing else in
   this module needs to change.

   No network submission is performed: there is no confirmed backend/
   destination for this data yet (architecture/COMPONENT_ARCHITECTURE.md
   open question). On successful validation this module only shows the
   accessible confirmation message and resets the form — see this
   milestone's report for the open item this leaves for a future milestone.
   ========================================================================== */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,}$/;
const MESSAGE_MIN_LENGTH = 20;

const VALIDATORS = {
  name: (value) => (value.trim().length > 0 ? null : "Veuillez indiquer votre nom."),
  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Veuillez indiquer votre adresse email.";
    return EMAIL_PATTERN.test(trimmed) ? null : "Veuillez indiquer une adresse email valide.";
  },
  phone: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return null; // optional field
    return PHONE_PATTERN.test(trimmed) ? null : "Veuillez indiquer un numéro de téléphone valide.";
  },
  subject: () => null, // optional field, no format constraint
  message: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Veuillez indiquer votre message.";
    if (trimmed.length < MESSAGE_MIN_LENGTH) {
      return `Votre message doit contenir au moins ${MESSAGE_MIN_LENGTH} caractères.`;
    }
    return null;
  }
};

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const feedback = form.querySelector("[data-form-feedback]");

  Object.keys(VALIDATORS).forEach((fieldName) => {
    const field = form.elements.namedItem(fieldName);
    if (!field) return;
    // Auto-clear a field's error as soon as it becomes valid again.
    field.addEventListener("input", () => {
      const error = VALIDATORS[fieldName](field.value);
      if (!error) clearFieldError(form, fieldName);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const errors = {};
    Object.keys(VALIDATORS).forEach((fieldName) => {
      const field = form.elements.namedItem(fieldName);
      if (!field) return;
      const error = VALIDATORS[fieldName](field.value);
      if (error) {
        errors[fieldName] = error;
      } else {
        clearFieldError(form, fieldName);
      }
    });

    const invalidFields = Object.keys(errors);

    if (invalidFields.length > 0) {
      invalidFields.forEach((fieldName) => showFieldError(form, fieldName, errors[fieldName]));
      form.elements.namedItem(invalidFields[0]).focus();
      setFeedback(feedback, "error", "Veuillez corriger les champs indiqués ci-dessous.");
      return;
    }

    setFeedback(
      feedback,
      "success",
      "Votre demande a bien été prise en compte. Notre équipe vous contactera rapidement."
    );
    form.reset();
  });
}

function showFieldError(form, fieldName, message) {
  const field = form.elements.namedItem(fieldName);
  const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
  field.setAttribute("aria-invalid", "true");
  if (errorEl) {
    errorEl.textContent = message;
  }
}

function clearFieldError(form, fieldName) {
  const field = form.elements.namedItem(fieldName);
  const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
  field.removeAttribute("aria-invalid");
  if (errorEl) {
    errorEl.textContent = "";
  }
}

function setFeedback(feedback, type, message) {
  if (!feedback) return;
  feedback.textContent = message;
  feedback.classList.remove("contact-form__feedback--success", "contact-form__feedback--error");
  feedback.classList.add(`contact-form__feedback--${type}`);
}
