
using FluentValidation;
using Library.Domain.Entities;




namespace Library.Application.Commands.Library.CreateBook;

public class CreateBooksCommandValidator : AbstractValidator<CreateBooksCommand>

{
    public CreateBooksCommandValidator()
    { 
        RuleFor(x => x.Category).NotEmpty().WithMessage($"{nameof(Books.Title)} Cannot be Empty ").MaximumLength(30)
            .WithMessage($"{nameof(Books.Title)} cannot be longer than 100 characters");

        RuleFor(x => x.Title).NotEmpty().WithMessage($"{nameof(Books.Author)} Cannot be Empty ").MaximumLength(30)
           .WithMessage($"{nameof(Books.Author)} cannot be longer than 100 characters");

        RuleFor(x => x.Author).NotEmpty().WithMessage($"{nameof(Books.Category)} Cannot be Empty ").MaximumLength(30)
           .WithMessage($"{nameof(Books.Category)} cannot be longer than 30 characters");


        RuleFor(x => x.Description).NotEmpty().WithMessage($"{nameof(Books.Description)} Cannot be Empty ").MaximumLength(30)
           .WithMessage($"{nameof(Books.Description)} cannot be longer than 1000 characters");
    }
}
