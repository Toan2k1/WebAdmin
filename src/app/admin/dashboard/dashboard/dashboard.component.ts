import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    document.querySelector(".jsFilter")!.addEventListener("click", function () {
      document.querySelector(".filter-menu")!.classList.toggle("active");
    });

    document.querySelector(".grid")!.addEventListener("click", function () {
      document.querySelector(".list")!.classList.remove("active");
      document.querySelector(".grid")!.classList.add("active");
      document.querySelector(".products-area-wrapper")!.classList.add("gridView");
      document.querySelector(".products-area-wrapper")!.classList.remove("tableView");
    });

    document.querySelector(".list")!.addEventListener("click", function () {
      document.querySelector(".list")!.classList.add("active");
      document.querySelector(".grid")!.classList.remove("active");
      document.querySelector(".products-area-wrapper")!.classList.remove("gridView");
      document.querySelector(".products-area-wrapper")!.classList.add("tableView");
    });

    const modeSwitch = document.querySelector('.mode-switch');
    modeSwitch!.addEventListener('click', function () {
      document.documentElement.classList.toggle('light');
      modeSwitch!.classList.toggle('active');
    });
  }


}
