# Les URLs c’est quoi ?

Auteur: HugoP
Tag: back

## Chemin dans le front

### Auth

- `/authentication/signin`
- `/authentication/signup`

### Channels

- `/channels/@me`
- `/channels/:id`

## Call API

### Users and auth

- `/authentication/login`
- `/authentication/register`
- `/authentication/refresh` (refresh jwt tokens)
- `/users` (get all users)
- `/authentication/send-email`
- `/authentication/verify` (on register verify the email)

### Channel

- `/channels?${params}` get all channels (Si le paramètre ne vous est pas utile enlevez le)
- `/channels/${id}?messages=true` get a channel and its messages
- `/channels` HTTP VERB: Post create a channel
- `/messages` HTTP VERB: Post create a message