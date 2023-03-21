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

    public virtual DbSet<DeckTable> DeckTables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=DeckDB; Integrated Security=SSPI;Encrypt=false;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CardTable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CardTabl__3214EC275A426B28");

            entity.ToTable("CardTable");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CardId)
                .HasMaxLength(255)
                .HasColumnName("CardID");
            entity.Property(e => e.DeckId)
                .HasMaxLength(255)
                .HasColumnName("DeckID");
        });

        modelBuilder.Entity<DeckTable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__DeckTabl__3214EC27444549AB");

            entity.ToTable("DeckTable");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DeckName).HasMaxLength(255);
            entity.Property(e => e.Uid).HasColumnName("UID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
