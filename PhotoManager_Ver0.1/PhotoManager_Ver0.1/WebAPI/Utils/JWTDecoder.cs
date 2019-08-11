using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;

namespace Utils
{
    public static class JwtDecoder
    {
        public static  Guid DecodeTokenToId(string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var jsonToken = handler.ReadToken(token) as JwtSecurityToken;
            return Guid.Parse(jsonToken.Claims.First(claim => claim.Type == "UserID").Value);
        }
    }
}
