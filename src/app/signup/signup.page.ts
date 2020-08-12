import { SignupdonemodalPage } from './../modals/signupdonemodal/signupdonemodal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, PickerController, ModalController,  } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../services/common.service";
import { LoadingController, ToastController, NavController, Platform } from '@ionic/angular';
import { PasswordValidator } from '../validators/password.validator';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx'; 
// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { formatDate } from "@angular/common";
@Component({
    selector: 'forms-validations-page',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss', '../forms/validations/styles/forms-validations.page.scss'],
})
export class SignupPage implements OnInit {

    signUpForm: FormGroup;	
    matching_passwords_group: FormGroup;
    loading : any;
    isProcess : boolean= false;
    occupation : any;
    PDMC : any;
    qualification : any;
    User = {
        'email': '',
        'phone': '',
        'password': '',
        'confirmPassword': '',
        'name': '',
        'dob': '',
        'gender': 'male',
        'language': 'English',
        'location': 'Pakistan',
        'current': 'Pakistan',
        'type': 'consumer',
        'device': '',
        // 'profile': ''
    }

    activeIndex: number = 0;
    numbers: any;
    numberss: any;
    weight = '';
    height = '';
    loadPage : boolean = false;
    validations = {
        'email': [
            { type: 'required', message: "Email is required." },
			{ type: 'pattern', message: 'Enter a valid email.' }

        ],
        'phone': [
            { type: 'required', message: "Phone Number is required." },
        ],
        'confirmPassword': [
            { type: 'required', message: "Confirm password is required." },
        ],
        'password': [
            { type: 'required', message: "Password is required." },
            { type: 'minlength', message: 'Password must be at least 5 characters long.' },
        ],
        'matching_passwords': [
			{ type: 'areNotEqual', message: 'Password mismatch' }
		],
        'name': [
            { type: 'required', message: "Name is required." },
        ],
        'dob': [
            { type: 'required', message: "DOB is required." },
        ],
        'gender': [
            { type: 'required', message: "Gender is required." },
        ],
        'language': [
            { type: 'required', message: "Language is required." },
        ],
        'type': [
            { type: 'required', message: "Role is required." },
        ],
        'occupation': [],
        'qualification': [],

        'PDMC': [],
    }
    @ViewChild('profileImages', { static: true }) slides: IonSlides;
    constructor(
        public pickerCtrl: PickerController,
        public navCtrl: NavController,

        private storage: Storage,
        private modalCtrl: ModalController,
        public platform: Platform,
        public service: CommonService,
        public loadingController: LoadingController,
        public toastController: ToastController,
        private nativehttp: HTTP,
        // private geolocation: Geolocation,
        private device: Device,
        // public Date:formatDate,
        // private nativeGeocoder: NativeGeocoder

        ) { }

        ionViewWillEnter() {
            this.storage.get('token').then((val) => {
                console.log('Your token is', val)
                if(val){
                    this.navCtrl.navigateRoot('home');
                }
            });
            
        }
    ngOnInit() {
        
        this.slides.length()
            .then(num => {
                this.numbers = num;
                console.log('numbers;',this.numbers);
                this.loadPage = true;
                this.numberss = Array(this.numbers).fill(0).map((x, i) => i);
            })

            this.matching_passwords_group = new FormGroup({
                password: new FormControl('', Validators.compose([
                    Validators.minLength(5),
                    Validators.required,
                    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z*$-+?_&=!%{}<>^@.]*$')
                ])),
                confirmPassword: new FormControl('', Validators.required)
            }, (formGroup: FormGroup) => {
                return PasswordValidator.areNotEqual(formGroup);
            });

        this.signUpForm = new FormGroup({
            'email': new FormControl('', Validators.compose([
                Validators.required,
				Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+[a-zA-Z0-9]{2,}')

            ])),
            // 'password': new FormControl('', Validators.compose([
            //     Validators.required,
            // ])),
            'phone': new FormControl('', Validators.compose([
                Validators.required,
            ])),
			'matching_passwords': this.matching_passwords_group,

            // 'confirmPassword': new FormControl('', Validators.compose([
            //     Validators.required,
            // ])),
            'name': new FormControl('', Validators.compose([
                Validators.required,
            ])),
            'dob': new FormControl('', Validators.compose([
                Validators.required,
            ])),
            'type': new FormControl('', Validators.compose([
                Validators.required,
            ])),
            'gender': new FormControl('', Validators.compose([
                Validators.required,
            ])),
            'occupation': new FormControl('', Validators.compose([])),
            'PDMC': new FormControl('', Validators.compose([])),
            'qualification': new FormControl('', Validators.compose([])),
            
        });
       
    }

    checkIsend() {

        this.slides.isEnd()
            .then(result => {
                console.log(result);

                this.switchFunctions(result);
            })
    }

    switchFunctions(result) {
        if (result) {
            console.log('user : ',this.User);
            
            this.showCheckoutModal();
        }

        else {
            this.slides.slideNext();
        }

    }

    onSlideChange() {
        this.slides.getActiveIndex()
            .then(index => {
                this.activeIndex = index;
                console.log(this.activeIndex);
            })
    }

    async showLanguagePicker() {
        let opts: PickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Done',
                }

            ],
            columns: [
                {
                    name: 'language',
                    options: [
                        {
                            text: 'English', value: 'English'
                        },
                        {
                            text: 'Urdu', value: 'Urdu'
                        },
                        {
                            text: 'Punjabi', value: 'Punjabi'
                        }
                    ]
                }

            ],
        };

        let picker = await this.pickerCtrl.create(opts);
        picker.present();
        picker.onDidDismiss().then(async data => {
            let col = await picker.getColumn('language');
            console.log('col', col)
            this.User.language = col.options[col.selectedIndex].text;
        })
    }

    async showLocationPicker() {
        let opts: PickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Done',
                }

            ],
            columns: [
                {
                    name: 'nation',
                    options: [
                        {
                            text: 'Pakistan', value: 'pakistan'
                        },
                        
                    ]
                },
                
            ],
        };

        let picker = await this.pickerCtrl.create(opts);
        picker.present();
        picker.onDidDismiss().then(async data => {
            let height = await picker.getColumn('nation');
            // let unit = await picker.getColumn('unit');
            console.log('height', height)
            this.User.location = height.options[height.selectedIndex].text;
        });
    }

    // async showPicker2() {
    //     let opts: PickerOptions = {
    //         buttons: [
    //             {
    //                 text: 'Cancel',
    //                 role: 'cancel'
    //             },
    //             {
    //                 text: 'Done',
    //             }

    //         ],
    //         columns: [
    //             {
    //                 name: 'height',
    //                 options: [
    //                     {
    //                         text: '50', value: '50'
    //                     },
    //                     {
    //                         text: '51', value: '51'
    //                     },
    //                     {
    //                         text: '52', value: '52'
    //                     },
    //                     {
    //                         text: '53', value: '53'
    //                     },
    //                     {
    //                         text: '54', value: '54'
    //                     }
    //                 ]
    //             },
    //             {
    //                 name: 'unit',
    //                 options: [
    //                     {
    //                         text: 'cm', value: 'cm'
    //                     },
    //                     {
    //                         text: 'inches', value: 'inches'
    //                     },

    //                 ]
    //             },


    //         ],
    //     };

    //     let picker = await this.pickerCtrl.create(opts);
    //     picker.present();
    //     picker.onDidDismiss().then(async data => {
    //         let height = await picker.getColumn('height');
    //         let unit = await picker.getColumn('unit');
    //         console.log('height', height)
    //         this.height = height.options[height.selectedIndex].text,
    //             unit.options[unit.selectedIndex].text
    //     });
    // }

    async showCheckoutModal() {
        const modal = await this.modalCtrl.create({
            component: SignupdonemodalPage
        });

        return await modal.present();
    }

    getUserType($event) {
       console.log('event',$event.target.value);
       this.User.type = $event.target.value
       
    }

    Signup(val){
        
        console.log('user',this.User);
        this.isProcess = true;
        this.presentLoading();

        let params = {
            'email':  this.User.email,
            'phone': this.User.phone,
            'password': this.User.password,
            'name': this.User.name,
            'dob': formatDate(this.User.dob, 'yyyy-MM-dd', 'en-US'),
            'gender': this.User.gender,
            'language': this.User.language,
            'location': this.User.location,
            'current': 'Pakistan',
            'device':(this.device.platform?this.device.platform:'android'),
            // 'profile': ''
        }
        
        
        if(this.User.type !='consumer' && this.User.type !='volunteer'){
            params['occupation'] = this.occupation;
            params['qualification'] = this.qualification;
            params['PDMC'] = this.PDMC;
            params['role'] = 'consultant';
            params['type'] = 'therapist';

            
        }else if(this.User.type =='consumer' || this.User.type =='volunteer'){
            params['role'] = 'consumer';            
        }else {
            
            params['role'] = 'consumer';            
        }
        
        console.log('users in register param : ',params);
        

        this.service.postCall('register', params)
            .subscribe((result) => {
                console.log('results', result);
                this.isProcess = false;
                this.loading.dismiss();

                if(result['status']!="failed"){
                    this.storage.set('token', result['token']);
                    this.showCheckoutModal();

                    this.presentToast('You are successfully registered.', 'success', '5000');
                    // this.navCtrl.navigateRoot('home');
                }else{
                    this.presentToast('There is some thing wrong please try again.', 'danger', '5000');
                    this.loading.dismiss();
                }
                
            });
        
     }

    


     async presentLoading() {
        this.loading = await this.loadingController.create({
            message: 'Please wait...',
        });
        await this.loading.present();

        const { role, data } = await this.loading.onDidDismiss();
        console.log('Loading dismissed!');
    }

    async presentToast(msg, color, duration) {
        const toast = await this.toastController.create({
            message: msg,
            color: color,
            duration: duration
        });
        toast.present();
    }

}
