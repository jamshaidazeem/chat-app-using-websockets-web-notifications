import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IMessage } from '../models/message';
// ref:- https://flowbite.com/docs/components/chat-bubble/#outline-chat-bubble
@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="flex items-start gap-2.5">
      <img
        class="w-8 h-8 rounded-full"
        [src]="message?.profile"
        [alt]="message?.name"
      />
      <div class="flex flex-col gap-1 w-full max-w-[320px]">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-gray-900 dark:text-white">{{
            message?.name
          }}</span>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{{
            message?.dateTime | date : 'short'
          }}</span>
        </div>
        <div
          class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
        >
          <p class="text-sm font-normal text-gray-900 dark:text-white">
            {{ message?.content }}
          </p>
        </div>
      </div>
    </div>
  `,
})
export class ChatMessageComponent {
  @Input() message?: IMessage;
}
