using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProFin.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddUserRelationsToEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Budgets");

            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "Budgets",
                newName: "UserId");

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "FinancialTransactions",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "CategoriesTransaction",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_FinancialTransactions_UserId",
                table: "FinancialTransactions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_CategoriesTransaction_UserId",
                table: "CategoriesTransaction",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Budgets_UserId",
                table: "Budgets",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Budgets_Users_UserId",
                table: "Budgets",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoriesTransaction_Users_UserId",
                table: "CategoriesTransaction",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FinancialTransactions_Users_UserId",
                table: "FinancialTransactions",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Budgets_Users_UserId",
                table: "Budgets");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoriesTransaction_Users_UserId",
                table: "CategoriesTransaction");

            migrationBuilder.DropForeignKey(
                name: "FK_FinancialTransactions_Users_UserId",
                table: "FinancialTransactions");

            migrationBuilder.DropIndex(
                name: "IX_FinancialTransactions_UserId",
                table: "FinancialTransactions");

            migrationBuilder.DropIndex(
                name: "IX_CategoriesTransaction_UserId",
                table: "CategoriesTransaction");

            migrationBuilder.DropIndex(
                name: "IX_Budgets_UserId",
                table: "Budgets");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "FinancialTransactions");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "CategoriesTransaction");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Budgets",
                newName: "UpdatedAt");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Budgets",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
