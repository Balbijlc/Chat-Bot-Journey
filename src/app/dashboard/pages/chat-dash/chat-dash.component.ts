import { Component } from '@angular/core';

import OpenAI from "openai";
import { environment } from 'src/environments/environments';


const openAiApiKey = environment.openAiApiKey

@Component({
  selector: 'chat-gpt',
  templateUrl: './chat-dash.component.html',
  styleUrls: ['./chat-dash.component.css'],
})
export class ChatDashComponent {



}
