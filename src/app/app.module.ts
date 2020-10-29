import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatricularTurmaComponent } from './matricular-turma/matricular-turma.component';
import { RealizarAtividadeComponent } from './realizar-atividade/realizar-atividade.component';
import { RegistroAtividadeComponent } from './registro-atividade/registro-atividade.component';
import { RegistroTurmaComponent } from './registro-turma/registro-turma.component';
import { VisualizacaoPontuacaoComponent } from './visualizacao-pontuacao/visualizacao-pontuacao.component';
import { VisualizacaoRespostaComponent } from './visualizacao-resposta/visualizacao-resposta.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MatricularTurmaComponent,
    RealizarAtividadeComponent,
    RegistroAtividadeComponent,
    RegistroTurmaComponent,
    VisualizacaoPontuacaoComponent,
    VisualizacaoRespostaComponent,
    IndexComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
