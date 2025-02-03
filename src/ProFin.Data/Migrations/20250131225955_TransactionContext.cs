using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProFin.Data.Migrations
{
    /// <inheritdoc />
    public partial class TransactionContext : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Transactions");

            migrationBuilder.AddColumn<Guid>(
                name: "CategoryTransactionId",
                table: "Transactions",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_CategoryTransactionId",
                table: "Transactions",
                column: "CategoryTransactionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_CategoriesTransaction_CategoryTransactionId",
                table: "Transactions",
                column: "CategoryTransactionId",
                principalTable: "CategoriesTransaction",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_CategoriesTransaction_CategoryTransactionId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_CategoryTransactionId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "CategoryTransactionId",
                table: "Transactions");

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Transactions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Transactions",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
