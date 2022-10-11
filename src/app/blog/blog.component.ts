import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  marqueeData = [
    {title: "UPSE", url: "https://www.google.com"},
    {title: "BPSE", url: "https://www.google.com"},
    {title: "TET", url: "https://www.google.com"},
    {title: "SSC-CGL", url: "https://www.google.com"},
    {title: "SSC-CHSL", url: "https://www.google.com"},
    {title: "Railway Group - D", url: "https://www.google.com"},
    {title: "Railway JE", url: "https://www.google.com"},
    {title: "BANK PO", url: "https://www.google.com"},
    {title: "Army", url: "https://www.google.com"},
    {title: "Airforce", url: "https://www.google.com"}
  ]
}
