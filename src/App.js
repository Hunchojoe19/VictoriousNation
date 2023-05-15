import "./App.css";
        <Route path="/" element={<Landing />} />
        <Route path="/campuses" element={<SecondPage />} />
        <Route path="/about_vcn" element={<Picture />} />
        <Route path="/donate" element={<GivePage />} />
      </Route>
    </Routes>
  );
}

export default App;
