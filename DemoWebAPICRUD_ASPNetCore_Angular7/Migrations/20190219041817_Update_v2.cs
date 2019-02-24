using Microsoft.EntityFrameworkCore.Migrations;

namespace DemoWebAPICRUD_ASPNetCore_Angular7.Migrations
{
    public partial class Update_v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CardOwerName",
                table: "PaymentDetails",
                newName: "CardOwnerName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CardOwnerName",
                table: "PaymentDetails",
                newName: "CardOwerName");
        }
    }
}
