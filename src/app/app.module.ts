import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { ShopingCarComponent } from "./components/shoping-car/shoping-car.component";
import { SuccessfulComponent } from "./components/successful/successful.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    ProductDetailComponent,
    SearchBarComponent,
    ShopingCarComponent,
    SuccessfulComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
