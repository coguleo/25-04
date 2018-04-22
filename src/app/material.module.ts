import { NgModule } from '@angular/core';

//Form Controls
import { 
    MatAutocompleteModule,
    MatCheckboxModule, 
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    //MatSliderModule,
    //MatSlideToggleModule
} from '@angular/material';

//Navigation
import{
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
//Layout
import{
    MatCardModule,
    MatDividerModule,
    //MatGridListModule,
    MatListModule,
    //MatStepperModule,
    MatTabsModule
} from '@angular/material';

//Buttons & Indicators
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
} from '@angular/material';

//Popups & Modals
import {
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';

//Data Table
import {
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatCheckboxModule, 
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        //MatSliderModule,
        //MatSlideToggleModule
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        //MatGridListModule,
        MatListModule,
        //MatStepperModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ],
    exports: [
        MatAutocompleteModule,
        MatCheckboxModule, 
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        //MatSliderModule,
        //MatSlideToggleModule
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        //MatGridListModule,
        MatListModule,
        //MatStepperModule,
        MatTabsModule,
        MatButtonModule,
        //MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ],
})
export class MaterialModule {}