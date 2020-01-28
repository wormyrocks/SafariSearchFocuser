//
//  SafariExtensionViewController.swift
//  SearchFocuser Extension
//
//  Created by Evan Kahn on 1/28/20.
//  Copyright © 2020 Evan Kahn. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
