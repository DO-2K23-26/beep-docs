# Authorization

Beep implements PBAC as an authorizations system to manage permissions concerns that apply while using Beep.

## Glossary

- Action: Effect applied by a subject, on a subject (different, similar or equal)
  - Examples:
    - A user applies an action on itself (update profile picture).
    - An admin deletes a channel.
- Permission, authorization: An authorization to execute an action.
- Role: A set of permissions.
  - Examples:
    - A "Manager" (custom role) may be allowed to view a specific "managers" channel.
    - An admin is allowed to delete a channel.
- Subject: an abstract element of Beep.
  - Examples:
    - A server, a channel, a user... Are all individual subjects on which actions may apply.
- Subject instance: a concrete element of Beep that lives in database.
  - Examples:
    - A specific, exisiting server, an existing, named channel in this server... Are all subject instances on which actions may apply.
- (In)dependant permission: A permission that does (not) depend on a another permission (the "parent" permission) to apply.
  - Examples:
    - CanWrite is dependant on CanViewContent. Beep does not allow a user to write content to a channel if they cannot read content from a channel.
    - CanViewContent is dependant on CanView to be true. Beep does not allow channel content to be seen if the channel cannot be seen.
    - CanViewContent is independant of CanWrite. A user with limited permissions could see messages, yet not write any.
    - CanDelete is independant of CanWrite. Beep allows an authorized user to delete a channel, independently of their permission to send messages to it.

## Definitions

This section aims to elaborate on the defined permissions, roles and subjects that constitute Beep's authorization system.

### Actions

- Create
- View
- ViewContent
- Update
- Delete
- Write

### Permissions

- CanCreate
- CanView
  - Example:
    - Viewing a channel on the side bar.
- CanViewContent
  - Examples:
    - Viewing a channel's messages.
- CanUpdate
- CanDelete
- CanWrite

### Roles

Some roles exist by default on every server. They are refered to as "default roles"

Custom roles:
- Can have any set of independant permissions.
Default roles:
- Member:
  - CanView the default server channel ("#general").
  - CanWrite in the default server channel.
- Owner:
  - Has every possible permissions, including the ability to:
    - Make other members into Owners.
    - Execute actions on the concerned server instance (update, delete).

### Subject instance-specific permissions
(TO VERIFIY): i believe this is what sets ABAC and PBAC apart.
> Le PBAC se concentre sur des politiques qui accordent ou refusent l'accès de l'utilisateur final à une ressource, et l'ABAC se focalise sur les attributs spécifiques qui influencent les politiques.

Policies allow ABAC + fine graining up to specific instances.
Example:
- ABAC:
  - One action: View
  - One subject: Channel
  - One permission: CanView
- PBAC (this is a policy):
  - One action: View
  - One subject: Channel
    - ...
    - One concerned Channel instance (in a set)
    - ...
  - One role(=set of permissions): "Foobar"
    - ...
    - One concerned permission: CanView
    - ...

In ABAC, to know if the action can be applied to the subject, the intersection between the provided action, subject and permission is verified.
In PBAC, the same is done by intersecting the single action with the single concerned subject instance (via its ID for example) and the single concerned permission(part of the user's role)

ABAC can be done/implemented through/within PBAC: the policy simply includes all existing instances for each subject.

I believe roles necessitate PBAC too... They can't be implemented in ABAC, since they are server and user-specific
permissions on channels VS permissions on channel instances

**TODO: handle case of 1 action applied on 2 or more subjects (another *user*'s *message*(=channel content) in a channel. How to handle this through policies?** Are policies powerful enough to concisely handle multiple roles (multiple instances of multiple permissions), subjects and subject instances for 1 action?
