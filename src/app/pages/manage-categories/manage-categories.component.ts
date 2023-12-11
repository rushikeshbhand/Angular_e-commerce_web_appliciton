import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent {
  newCategory: string = '';
  categoryToDelete: string = '';
  categoryToUpdate: string = '';
  allCategories: any[] = [];
  selectedCategoryForUpdate: string = '';
  updatedCategoryName: string = '';

  constructor(private categoryService: CategoryService) {}

  // add category
  addCategory(): void {
    const category = { categoryName: this.newCategory };
    this.categoryService.createCategory(category).subscribe(
      (response) => {
        console.log('Category created successfully', response);
        this.getAllCategories();
      },
      (error) => {
        console.error('Error creating category', error);
      }
    );
  }

  // update category
  updateCategory(): void {
    if (!this.selectedCategoryForUpdate || !this.updatedCategoryName) {
      console.error('Please select a category and enter updated name.');
      return;
    }

    const categoryToUpdate = this.allCategories.find(category => category.categoryName === this.selectedCategoryForUpdate);

    if (!categoryToUpdate) {
      console.error('Selected category not found.');
      return;
    }

    const updatedCategory = { categoryId: categoryToUpdate.categoryId, categoryName: this.updatedCategoryName };

    this.categoryService.updateCategory(updatedCategory).subscribe(
      (response) => {
        console.log('Category updated successfully', response);
        this.getAllCategories();
      },
      (error) => {
        console.error('Error updating category', error);
      }
    );
  }


  // Autofill the update form based on the selected category
  autofillUpdateForm(): void {
    const selectedCategory = this.allCategories.find(category => category.categoryName === this.selectedCategoryForUpdate);
    if (selectedCategory) {
      this.updatedCategoryName = selectedCategory.categoryName;
    } else {
      console.error('Selected category not found.');
    }
  }

  // delete category
  deleteCategory(): void {
    if (!this.categoryToDelete) {
        console.error('Please enter a category name to delete');
        return;
    }

    const categoryToDelete = this.allCategories.find(category => category.categoryName === this.categoryToDelete);

    if (!categoryToDelete) {
        console.error('Category not found');
        return;
    }

    this.categoryService.deleteCategory(categoryToDelete.categoryId).subscribe(
        (response) => {
            console.log(response);
            this.getAllCategories();
        },
        (error) => {
            console.error('Error deleting category', error);
        }
    );
  }

  // get all categories
  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (response) => {
        console.log('All categories:', response);
        this.allCategories = response;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }
}
