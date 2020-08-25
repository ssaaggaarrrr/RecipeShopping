import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component'
import {ServersComponent} from './servers/servers.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-listedit/shopping-listedit.component';
import { HeaderComponent } from './header/header.component';
import { HighlighterDirectiveDirective } from './shared/highlighter-directive.directive';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    HighlighterDirectiveDirective,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
