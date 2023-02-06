using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Contacts.API.Migrations
{
    /// <inheritdoc />
    public partial class SubcategoryAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Subcategory",
                table: "Contacts",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Subcategory",
                table: "Contacts");
        }
    }
}
