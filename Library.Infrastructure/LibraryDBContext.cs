using Library.Domain.Entities;
using Microsoft.EntityFrameworkCore;


namespace Library.Infrastructure;

public class  LibraryDBContext : DbContext
{
    public LibraryDBContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<Books> Books { get; set; }



}

