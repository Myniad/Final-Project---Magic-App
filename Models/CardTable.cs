using System;
using System.Collections.Generic;

namespace Final_Project___Magic_App.Models;

public partial class CardTable
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string ImageUrl { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string TypeLine { get; set; } = null!;

    public string ScryfallId { get; set; } = null!;
}
