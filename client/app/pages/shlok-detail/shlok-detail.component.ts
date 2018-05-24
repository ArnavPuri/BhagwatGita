// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { ShlokService } from '../../services/shlok.service';

// Import Models
import { Shlok } from '../../domain/bhagwat-gita_db/shlok';

// START - USED SERVICES
/*
 *	ShlokService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ShlokService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "shlok-detail",
    templateUrl: './shlok-detail.component.html',
    styleUrls: ['./shlok-detail.component.css']
})
export class ShlokDetailComponent implements OnInit {
    
    // Attributes
    list: Shlok[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private shlokService: ShlokService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.shlokService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.shlokService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}