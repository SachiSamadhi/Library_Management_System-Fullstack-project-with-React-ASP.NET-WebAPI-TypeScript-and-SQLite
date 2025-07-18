﻿

using Library.Contracts.Errors;

namespace Library.Contracts.Exceptions;

public class CustomValidationException : Exception
{
    public CustomValidationException(List<ValidationError> validationErrors)
    {
        ValidationErrors = validationErrors;
    }
    public List<ValidationError> ValidationErrors { get; set; }
}
