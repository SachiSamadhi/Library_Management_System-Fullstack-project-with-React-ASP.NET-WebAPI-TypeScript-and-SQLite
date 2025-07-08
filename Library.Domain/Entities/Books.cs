namespace Library.Domain.Entities;

public class Books : BaseEntity
{
    public string Title { get; set; }
    public string Author { get; set; }
    public string Category { get; set; }
    public string Description { get; set; }

}
