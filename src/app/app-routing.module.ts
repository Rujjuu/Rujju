import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signupdonemodal', loadChildren: './modals/signupdonemodal/signupdonemodal.module#SignupdonemodalPageModule' },
  { path: 'finddoct', loadChildren: './finddoct/finddoct.module#FinddoctPageModule' },
  { path: 'findhospital', loadChildren: './findhospital/findhospital.module#FindhospitalPageModule' },
  { path: 'findclinic', loadChildren: './findclinic/findclinic.module#FindclinicPageModule' },
  { path: 'doctorlist', loadChildren: './doctorlist/doctorlist.module#DoctorlistPageModule' },
  { path: 'docmap', loadChildren: './docmap/docmap.module#DocmapPageModule' },
  { path: 'docdetails', loadChildren: './docdetails/docdetails.module#DocdetailsPageModule' },
  { path: 'hospdetails', loadChildren: './hospdetails/hospdetails.module#HospdetailsPageModule' },
  { path: 'clinicdetails', loadChildren: './clinicdetails/clinicdetails.module#ClinicdetailsPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'calldocmodal', loadChildren: './modals/calldocmodal/calldocmodal.module#CalldocmodalPageModule' },
  { path: 'videocall', loadChildren: './modals/videocall/videocall.module#VideocallPageModule' },
  { path: 'findpharmacy', loadChildren: './findpharmacy/findpharmacy.module#FindpharmacyPageModule' },
  { path: 'finddrug', loadChildren: './finddrug/finddrug.module#FinddrugPageModule' },
  { path: 'drugdetails', loadChildren: './drugdetails/drugdetails.module#DrugdetailsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'paymentdonemodal', loadChildren: './modals/paymentdonemodal/paymentdonemodal.module#PaymentdonemodalPageModule' },
  { path: 'talktosomeone', loadChildren: './talktosomeone/talktosomeone.module#TalktosomeonePageModule' },
  { path: 'professionalhelp', loadChildren: './professionalhelp/professionalhelp.module#ProfessionalhelpPageModule' },
  { path: 'helpsomeone', loadChildren: './helpsomeone/helpsomeone.module#HelpsomeonePageModule' },
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'emergency', loadChildren: './emergency/emergency.module#EmergencyPageModule' },
  { path: 'chattype', loadChildren: './chattype/chattype.module#ChattypePageModule' },
  { path: 'doctorselection', loadChildren: './doctorselection/doctorselection.module#DoctorselectionPageModule' },
  { path: 'emergencylocation', loadChildren: './emergencylocation/emergencylocation.module#EmergencylocationPageModule' },
  { path: 'emergencyphone', loadChildren: './emergencyphone/emergencyphone.module#EmergencyphonePageModule' },
  { path: 'respondertype', loadChildren: './respondertype/respondertype.module#RespondertypePageModule' },
  { path: 'addfeeling', loadChildren: './addfeeling/addfeeling.module#AddfeelingPageModule' },
  { path: 'calltype', loadChildren: './calltype/calltype.module#CalltypePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
