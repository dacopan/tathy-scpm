using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class datosbasicos1 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        SCPMdbEntities db = new SCPMdbEntities();
        List<SCPM_AREAS> lis = db.SCPM_AREAS.ToList();
        Console.WriteLine(lis[0].ARE_NOM);
    }
}