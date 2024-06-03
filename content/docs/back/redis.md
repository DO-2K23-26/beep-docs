# Structure des données channels voice redis

Auteur: HugoP
Tag: back, front

## Redis

Redis is a database stored in cache. So it is fast.

The other feature of redis is that datas are stored with a key:value style

I like to browse through the [documentation](https://redis.io/docs/latest/commands/) to know what i can do with it

### In our case

We will use redis to store data of connected user in voice channels. I tried to make the simplest data structure.

They will be stored like this in the database:

```txt
channel:chanId userId1:username1 userId2:username2 userId3:username3 ...
```

## Store datas

An example to store data depicted before:

```tsx
redis.hset(`channel:${channelId}`, userId, username)
```

## Remove data

```tsx
redis.hdel(`channel:${channelId}`, userId)
```

## Retrieve data

The structure you should give to the frontend should be something like this:

```json
[
    {
        "channelId": "10",
        "users": [
            {
                "id": "2",
                "username": "Courtcircuits"
            },
             {
                "id": "3",
                "username": "Rapidement"
            }
        ]
    },
     {
        "channelId": "4",
        "users": [
            {
                "id": "5",
                "username": "DoubleBapt"
            },
        ]
    }
]
```

## Example

You can see an example of this implementation [here](https://gitlab.polytech.umontpellier.fr/beep/voice/api/-/blob/main/apps/channel/services/channel_service.ts)
