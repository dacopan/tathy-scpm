﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

/// <summary>
/// Descripción breve de HelperUtil
/// </summary>
public class HelperUtil
{
    public HelperUtil()
    {
        //
        // TODO: Agregar aquí la lógica del constructor
        //       
    }

    public const string maskPassport = "'mask': '9{10}'";
    public const string patternPassport = "\\d{10}";
    public const string tipoSangre = "A-,A+,AB-,AB+,B-,B+,O-,O+";

    public const string cargoJefeArea = "DIRECTOR";
    public const string cargoJefeUnidad = "COORDINADOR,INTENDENTE";




    public static void showNotifi(String msg)
    {
        NotifyMessages = (msg);
        Console.WriteLine(msg);
    }

    public static String NotifyMessages
    {
        get
        {
            HttpSessionState webSession = HttpContext.Current.Session;
            List<string> _notifyMessages = null;
            _notifyMessages = ((List<string>)(webSession["SessionFeedbackKey"]));

            if (_notifyMessages == null)
            {
                _notifyMessages = new List<string>();
                webSession["SessionFeedbackKey"] = _notifyMessages;
            }


            string _r = string.Join(",", _notifyMessages.ToArray());
            _notifyMessages.Clear();
            webSession["SessionFeedbackKey"] = _notifyMessages;
            return _r.ToString();
        }
        set
        {
            HttpSessionState webSession = HttpContext.Current.Session;
            List<string> _notifyMessages = null;
            _notifyMessages = ((List<string>)(webSession["SessionFeedbackKey"]));

            if (_notifyMessages == null)
            {
                _notifyMessages = new List<string>();
                webSession["SessionFeedbackKey"] = _notifyMessages;
            }

            _notifyMessages.Add(value);
            webSession["SessionFeedbackKey"] = _notifyMessages;
        }
    }
}