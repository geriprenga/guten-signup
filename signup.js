jQuery(document).ready(function() {

    // Selectors
    var signup_btn = jQuery('.signup-btn');
    var signup_input = jQuery('.sign-up-field');
    var error_msg = jQuery('.error-msg');
    var success_msg = jQuery('.success-msg');
    var empty_error = 'Please enter an email';
    var invalid_email = 'Enter a valid email address';

    // Email validation function
    var isEmail = function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    // show error function
    var showError = function (msg) {
        error_msg.show();
        error_msg.append(msg);
        signup_input.addClass('invalid');
    }

    // show success function
    var showSuccess = function (msg) {
        success_msg.show();
        success_msg.append(msg);
        signup_input.val("");
        signup_input.removeClass('invalid');
        setTimeout(() => {
            success_msg.empty().hide();
        }, 3000);
    }

    // clear error and success messages
    var clearError = function () {
        error_msg.empty().hide();
        success_msg.empty().hide();
        signup_input.removeClass('invalid');
    }

    // Submit 
    signup_btn.click(function() {
        event.preventDefault();
        clearError();
        var input_val = signup_input.val();

        // empty field error
        if (input_val.trim().length == 0 ) {     
            showError(empty_error);
        } else {
            // clear all errors
            clearError();
            // email validation error
            if (!isEmail(input_val)) {
                showError(invalid_email);
            } else {
                // clear all errors
                clearError();
                // submit email
                var url = 'https://api.sendinblue.com/v3/contacts';
                var api_key = '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';

                // Data to Post
                var sendEmail = {
                    email: input_val
                };
                // Data into Json
                var jsonData = JSON.stringify(sendEmail);
                
                jQuery.ajax({
                    type: 'post',
                    dataType: 'json',
                    url: url,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'api-key': api_key
                    },
                    data: jsonData,
                    success: function(data, textStatus, xhr) {
                        // succesfully added email to contacts
                        if (xhr.status == 201) {
                            showSuccess(textStatus);
                        }
                        
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        var errorObject = JSON.parse(xhr.responseText);
                         showError(errorObject.message);
                    }
                });
            }
        }
        
    });
});

