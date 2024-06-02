# Channel/server URLs

Auteur: HugoP
Tag: front

## In Servers

It would be something like this:

```json
/channels/:serverId/:channelId
```

For example:

```json
/channels/1234123/12341234
```

## Private

For the moment we don’t have private conversation.

 If you are in a private channel you  will access it like this:

```json
/channels/@me/:id
```

The id here is the id of the private conversation

For example:

```json
/channels/@me/21341234
```
