using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Contacts.API.Migrations
{
    /// <inheritdoc />
    public partial class contactmodeldeletedpasswordgetset : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "Contacts");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Contacts",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
