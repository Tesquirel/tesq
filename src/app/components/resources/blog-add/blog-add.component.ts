import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators, Editor, Toolbar, NgxEditorModule } from 'ngx-editor';
import jsonDoc from './doc';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { Router } from '@angular/router';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'app-blog-add',
  imports: [NgxEditorModule, ReactiveFormsModule, FormsModule, CommonModule, QuillModule],
  templateUrl: './blog-add.component.html',
  styleUrl: './blog-add.component.scss'
})
export class BlogAddComponent {

  content: string = '';
  blogForm!: FormGroup;
  modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  constructor(private router: Router, private sharedService: SharedService, private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // Here you can POST this HTML to your backend
    // Example: this.http.post('/api/blog', { html: this.content }).subscribe(...)
    const info = {
      title: this.blogForm.controls['title'].value,
      category: this.blogForm.controls['category'].value,
      description: this.blogForm.controls['content'].value,
      author: localStorage.getItem('First Name') + ' ' + localStorage.getItem('Last Name'),
      created_by: localStorage.getItem('First Name') + ' ' + localStorage.getItem('Last Name'),
      created_datetime: '',
      modified_by: localStorage.getItem('First Name') + ' ' + localStorage.getItem('Last Name'),
      modified_datetime: '',
      org_code: 'TSQ',
    }
    this.sharedService.addBlogInfoService(info).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          alert('Thank you for adding a blog.');
          this.blogForm.reset();
        }
      },
    });
  }

  // editordoc = jsonDoc;

  // editor: Editor = new Editor();
  // toolbar: Toolbar = [
  //   ['bold', 'italic'],
  //   ['underline', 'strike'],
  //   ['code', 'blockquote'],
  //   ['ordered_list', 'bullet_list'],
  //   [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  //   ['link', 'image'],
  //   ['text_color', 'background_color'],
  //   ['align_left', 'align_center', 'align_right', 'align_justify'],
  // ];

  // form = new FormGroup({
  //   editorContent: new FormControl(
  //     { value: jsonDoc, disabled: false },
  //     Validators.required()
  //   ),
  // });

  // get doc() {
  //   return this.form.get('editorContent');
  // }

  // ngOnInit(): void {
  //   this.editor = new Editor();
  // }

  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }

}
