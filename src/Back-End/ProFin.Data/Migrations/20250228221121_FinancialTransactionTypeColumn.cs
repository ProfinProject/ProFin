using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProFin.Data.Migrations
{
    /// <inheritdoc />
    public partial class FinancialTransactionTypeColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropIndex(
            //    name: "IX_Budgets_CategoryTransactionId",
            //    table: "Budgets");

            migrationBuilder.AddColumn<string>(
                name: "TransactionType",
                table: "FinancialTransactions",
                type: "TEXT",
                maxLength: 1,
                nullable: false,
                defaultValue: "");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Budgets_CategoryTransactionId",
            //    table: "Budgets",
            //    column: "CategoryTransactionId",
            //    unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropIndex(
            //    name: "IX_Budgets_CategoryTransactionId",
            //    table: "Budgets");

            migrationBuilder.DropColumn(
                name: "TransactionType",
                table: "FinancialTransactions");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Budgets_CategoryTransactionId",
            //    table: "Budgets",
            //    column: "CategoryTransactionId");
        }
    }
}
