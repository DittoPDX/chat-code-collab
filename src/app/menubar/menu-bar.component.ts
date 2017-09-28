import { Component, Input } from '@angular/core';

@Component
({
	selector: 'menu-bar',
	templateUrl: 'menu-bar.html',
	styleUrls: ['menu-bar.css']
})

export class MenuBarComponent
{	
	//Three hover checks for the menu bar
	onHover: boolean;
	onHover1: boolean;
	onHover2: boolean;
	
	//Handle user click event for menu
	menuToggle()
	{
		this.onHover = false;
	}

	//Handle user hover for menu
	mouseHover(isHover)
	{
		this.onHover = isHover;
	}

	//Handle user click event for menu
	menuToggle1()
	{
		this.onHover1 = false;
	}

	//Handle user hover for menu
	mouseHover1(isHover)
	{
		this.onHover1 = isHover;
	}

	//Handle user click event for menu
	menuToggle2()
	{
		this.onHover2 = false;
	}

	//Handle user hover for menu
	mouseHover2(isHover)
	{
		this.onHover2 = isHover;
	}
}
