using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProFin.Data.Migrations
{
    /// <inheritdoc />
    public partial class updatecategories : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FinancialTransactions_CategoriesTransaction_CategoryFinancialTransactionId",
                table: "FinancialTransactions");

            migrationBuilder.AlterColumn<Guid>(
                name: "CategoryFinancialTransactionId",
                table: "FinancialTransactions",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsPattern",
                table: "CategoriesTransaction",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_FinancialTransactions_CategoriesTransaction_CategoryFinancialTransactionId",
                table: "FinancialTransactions",
                column: "CategoryFinancialTransactionId",
                principalTable: "CategoriesTransaction",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FinancialTransactions_CategoriesTransaction_CategoryFinancialTransactionId",
                table: "FinancialTransactions");

            migrationBuilder.DropColumn(
                name: "IsPattern",
                table: "CategoriesTransaction");

            migrationBuilder.AlterColumn<Guid>(
                name: "CategoryFinancialTransactionId",
                table: "FinancialTransactions",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_FinancialTransactions_CategoriesTransaction_CategoryFinancialTransactionId",
                table: "FinancialTransactions",
                column: "CategoryFinancialTransactionId",
                principalTable: "CategoriesTransaction",
                principalColumn: "Id");
        }
    }
}
