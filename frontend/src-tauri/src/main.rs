#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn my_custom_command(message: String) -> String {
    return format!("{} {}", "Hello from", message);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
