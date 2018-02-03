import { Component } from "@angular/core";
import {IonicPage, NavController, NavParams, ViewController} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Observable} from "rxjs/Observable";
import { StoreServices } from "../../store/services";

@IonicPage()
@Component({
  selector: "page-edit-provider",
  templateUrl: "edit-provider.html",
})
export class EditProviderPage {

  private _editProvider: FormGroup;
  private _providerData: string;
  private _providerCountries$: Observable<string[]>;
  private _providerRegions$: Observable<string[]>;
  private _providerServiceProviders$: Observable<string[]>;
  private _providerPlans$: Observable<string[]>;
  private _addMeterGuid$: Observable<any>;
  private _planName: string;
  private _type: string;
  private _country: string;
  private _region: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _storeServices: StoreServices,
    private _navCtrl: NavController,
    private _viewCtrl: ViewController,
    private navParams: NavParams
  ) {

    this._providerData = this.navParams.get("providerData").split("/");
    this._planName = this.navParams.get("plan");
    this._type = this._providerData[0];
    this._country = this._providerData[1];
    this._region = this._providerData[2];

    this._editProvider = _formBuilder.group({
      country: ["", Validators.required],
      region: ["", Validators.required],
      provider: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
      plan: ["", Validators.required]
    });

    this._providerCountries$ = this._storeServices.selectProviderCountries();
    this._providerRegions$ = this._storeServices.selectProviderRegions();
    this._providerServiceProviders$ = this._storeServices.selectProviderServiceProviders();
    this._providerPlans$ = this._storeServices.selectProviderPlans();
    this._addMeterGuid$ = this._storeServices.selectAddMeterGuid();
  }

  ionViewDidLoad() {
    this._storeServices.getProviderCountries(this._type);
  }

  private _getRegions() {
    this._storeServices.getProviderRegions(`${this._type}/${this._editProvider.value["country"]}`);
  }

  private _getProviders() {
    this._storeServices.getProviderProviders(`${this._type}/${this._editProvider.value["country"]}/${this._editProvider.value["region"]}`);
  }

  private _getPlans() {
    this._storeServices.getProviderPlans(`${this._type}/${this._editProvider.value["country"]}/${this._editProvider.value["region"]}/${this._editProvider.value["provider"]}/plans`);
  }

  private _closeModal() {
    this._viewCtrl.dismiss({type: this._type, provider: this._editProvider});
  }

  private _cancelModal() {
    this._viewCtrl.dismiss();
  }

}
