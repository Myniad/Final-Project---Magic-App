﻿using System;
using System.Collections.Generic;

namespace Final_Project___Magic_App.Models;

public partial class DeckCardTable
{
    public int Id { get; set; }

    public string? DeckId { get; set; }

    public string? CardId { get; set; }

    public string? CardName { get; set; }
}
