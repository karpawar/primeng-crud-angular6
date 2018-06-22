import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'fa fa-fw fa-file-o',
        items: [{
          label: 'New',
          icon: 'fa fa-fw fa-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { separator: true },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa fa-fw fa-edit',
        items: [
          { label: 'Undo', icon: 'fa fa-fw fa-mail-forward' },
          { label: 'Redo', icon: 'fa fa-fw fa-mail-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'fa fa-fw fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa fa-fw fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa fa-fw fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa fa-fw fa-refresh',
            items: [
              { label: 'Save', icon: 'fa fa-fw fa-save' },
              { label: 'Update', icon: 'fa fa-fw fa-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'fa fa-fw fa-phone',
            items: [
              { label: 'Delete', icon: 'fa fa-fw fa-minus' }
            ]
          }
        ]
      },
      {
        label: 'Quit', icon: 'fa fa-fw fa-minus'
      }
    ];
  }
