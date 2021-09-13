using System;

namespace Domain
{
    public class Message
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public virtual AppUser Sender { get; set; }
        public string SenderId { get; set; }
        public virtual Channel Channel { get; set; }
        public Guid ChannelId { get; set; }
        public virtual MessageType MessageType { get; set; }
    }
}