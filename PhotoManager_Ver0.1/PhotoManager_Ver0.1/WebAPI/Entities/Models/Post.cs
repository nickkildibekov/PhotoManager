using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace Entities.Models
{
    public class Post
    {
        [HiddenInput(DisplayValue = false)]
        public int Id { get; set; }        
        [Display(Name = "Title")]
        public string Title { get; set; }
        [Display(Name = "Description")]
        public string Description { get; set; }
        [Display(Name = "Attach File")]
        public string ImagePath { get; set; }
        public string B64Image { get; set; }
        [Display(Name = "Posted")]
        public DateTime PostedDateTime { get; set; }
        public int Rating { get; set; }        
        public string AuthorFullName { get; set; }
        [ForeignKey(nameof(ApplicationUser))]
        public Guid ApplicationUserId { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
        public virtual ICollection<Dislike> DisLikes { get; set; }
        [Required]
        public virtual ApplicationUser ApplicationUser { get; set; }
        

        public Post()
        {
            PostedDateTime = DateTime.Now;
            Likes = new List<Like>();
            DisLikes = new List<Dislike>();
        }
    }
}
