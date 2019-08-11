using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    public class Like
    {
        public int Id { get; set; }
        [ForeignKey(nameof(ApplicationUser))]
        public Guid ApplicationUserId { get; set; }
        [ForeignKey(nameof(CurrentPost))]
        public int CurrentPostId { get; set; }
        public virtual Post CurrentPost { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
