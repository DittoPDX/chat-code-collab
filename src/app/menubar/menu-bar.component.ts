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
	onHover1: boolean;
	onHover2: boolean;
	onHover3: boolean;

	//Handle user hover for menu
	mouseHover(isHover, tabNum)
	{
		switch (tabNum)
		{
			case 1:
			{
				this.onHover1 = isHover;
				break;	
			}
			case 2:
			{
				this.onHover2 = isHover;
				break;	
			}
			case 3:
			{
				this.onHover3 = isHover;
				break;	
			}
		}
	}
}
