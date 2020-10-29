import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatricularTurmaComponent } from './matricular-turma/matricular-turma.component';
import { RealizarAtividadeComponent } from './realizar-atividade/realizar-atividade.component';
import { RegistroAtividadeComponent } from './registro-atividade/registro-atividade.component';
import { RegistroTurmaComponent } from './registro-turma/registro-turma.component';
import { VisualizacaoPontuacaoComponent } from './visualizacao-pontuacao/visualizacao-pontuacao.component';
import { VisualizacaoRespostaComponent } from './visualizacao-resposta/visualizacao-resposta.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: '#',   redirectTo: '/#', pathMatch: 'full' },
	{ path: 'matricular-turma', component: MatricularTurmaComponent },
	{ path: 'realizar-atividade', component: RealizarAtividadeComponent },
	{ path: 'registro-atividade', component: RegistroAtividadeComponent },
	{ path: 'registro-turma', component: RegistroTurmaComponent },
	{ path: 'visualizacao-pontuacao', component: VisualizacaoPontuacaoComponent },
	{ path: 'visualizacao-resposta', component: VisualizacaoRespostaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
