
using FluentValidation;
using Library.Domain.Entities;

namespace Library.Application.Commands.Library.DeleteBook;

public class DeleteBooksCommandValidator : AbstractValidator<DeleteBooksCommand>
{
    public DeleteBooksCommandValidator()
    {
        RuleFor(x => x.Id).NotEmpty().WithMessage($"{nameof(Books.Id)} Cannot be Empty");
    }
}

