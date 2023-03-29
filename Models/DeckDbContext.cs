using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Final_Project___Magic_App.Models;

public partial class DeckDbContext : DbContext
{
    public DeckDbContext()
    {
    }

    public DeckDbContext(DbContextOptions<DeckDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CardTable> CardTables { get; set; }

    public virtual DbSet<DeckCardTable> DeckCardTables { get; set; }

    public virtual DbSet<DeckTable> DeckTables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source= counterspell.database.windows.net;Initial Catalog=DeckDB; User Id= jkim5929; Password= Zoom1006");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CardTable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CardTabl__3214EC27A5C7E919");

            entity.ToTable("CardTable");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ImageUrl).HasColumnName("Image_URL");
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.ScryfallId).HasColumnName("Scryfall_ID");
            entity.Property(e => e.TypeLine).HasColumnName("Type_Line");
        });

        modelBuilder.Entity<DeckCardTable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CardTabl__3214EC27752A9E36");

            entity.ToTable("DeckCardTable");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CardId)
                .HasMaxLength(255)
                .HasColumnName("CardID");
            entity.Property(e => e.CardName).HasMaxLength(255);
            entity.Property(e => e.Cmc).HasColumnName("CMC");
            entity.Property(e => e.DeckId)
                .HasMaxLength(255)
                .HasColumnName("DeckID");
            entity.Property(e => e.Price).HasMaxLength(255);
            entity.Property(e => e.TypeLine)
                .HasMaxLength(255)
                .HasColumnName("Type_Line");
        });

        modelBuilder.Entity<DeckTable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__DeckTabl__3214EC27D0C14E5D");

            entity.ToTable("DeckTable");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DeckName).HasMaxLength(255);
            entity.Property(e => e.Uid).HasColumnName("UID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
