# System messages

## What are system messages?
System messages, also called system notifications, or internal notifications, is an abstract component of Beep.
In practice, it is seen by users as a message written by none of the server members, but by Beep itself.
For example, this happens when pinning a message : the message is visible to all in the channel.
System messages also include:
- Private system messages, sent to a single user
  - As an alert message : user joined a scam server.
  - As a warning message : user was reported too many times.

Specific permissions and authorizations apply to a system message:
- Can be deleted only by authorized users
  - Examples:
    - Concerning the "message pinned" notification message, it can be deleted by the user that pinned the message, as well as server owners and authorized users (custom roles with the ability to delete all messages from a channel).

> /!\ This feature does not exist yet.
> Currently, when pinning a message, the "message pinned" notification message is sent by the user, without their manual intervention.

## Why do we need system messages?

As was said, currently, when pinning a message, the "message pinned" notification message is sent by the user, without their manual intervention.
This message should be sent by the internal notification system itself.

System messages are needed:
- To sit amet.
- Because consectetur.
- ... adipiscing elit.

## How are system messages implemented?

> Implementing system messages implies a complete re-abstraction and refactor of the "message pinning" (as to follow clean code principles, remove technical debt) feature, as well as adding new features, such as more system notification messages (to notify server members of different server events)
> Concerning permissions and authorizations, look whether the actions be authorized with one policy on the user instance, message instance subjects all at once? This is needed to allow only the user who pinned the message (instance of channel content??) in the channel to delete the message. This may mean we need authorizations granularity up to single messages (and not just channelContent) in policies.

lorem ipsum dolor
- sit amet.
- consectetur.
- adipiscing elit.
